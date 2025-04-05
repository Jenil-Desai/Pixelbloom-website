"use client";

import {ColumnDef} from "@tanstack/react-table";
import {Badge} from "@/components/ui/badge";
import moment from "moment";
import {Button} from "@/components/ui/button";
import {ArrowUpDown} from "lucide-react";

export type Artist = {
    id: string;
    clerkId: string;
    name: string;
    email: string;
    mobileNo: string;
    gender: "MALE" | "FEMALE";
    country: string;
    isVerified: boolean;
    role: "ARTIST" | "ADMIN";
    createdAt: Date;
};

export const columns: ColumnDef<Artist>[] = [
    {
        accessorKey: "clerkId",
        header: "Clerk Id",
    },
    {
        accessorKey: "name",
        header: ({column}) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        }
    },
    {
        accessorKey: "email",
        header: ({column}) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Email Id
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        }
    },
    {
        accessorKey: "mobileNo",
        header: "Mobile No",
        cell: ({row}) => {
            return row.getValue("mobileNo") || "Not Provided";
        }
    },
    {
        accessorKey: "country",
        header: ({column}) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Country
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => {
            return row.getValue("country") || "Not Provided";
        }
    },
    {
        accessorKey: "gender",
        header: "Gender",
        cell: ({row}) => {
            return (
                row.getValue("gender") ? (
                    <Badge className={row.getValue("gender") === "MALE" ? "bg-blue-400" : "bg-pink-400"}>
                        {row.getValue("gender")}
                    </Badge>
                ) : (
                    <Badge className="bg-gray-400">
                        Not Provided
                    </Badge>
                )
            );
        },
    },
    {
        accessorKey: "isVerified",
        header: "Verified",
        cell: ({row}) => {
            return (
                <Badge className={row.getValue("isVerified") ? "bg-green-400" : "bg-red-400"}>
                    {row.getValue("isVerified") ? "Yes" : "No"}
                </Badge>
            );
        },
    },
    {
        accessorKey: "role",
        header: "Role",
        cell: ({row}) => {
            return (
                <Badge className={row.getValue("role") === "ARTIST" ? "bg-green-400" : "bg-red-400"}>
                    {row.getValue("role")}
                </Badge>
            );
        },
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
        cell: ({row}) => {
            return moment(row.getValue("createdAt")).format("DD / MM / YYYY");
        },
    },
];