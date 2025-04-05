"use client";

import {ColumnDef} from "@tanstack/react-table";
import moment from "moment";
import {Button} from "@/components/ui/button";
import {ArrowUpDown} from "lucide-react";

export type User = {
    id: string;
    name: string;
    email: string;
    created_at: Date;
};

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "name",
        header: ({column}) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => {
            return row.getValue("name") || "Anonymous";
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
        accessorKey: "created_at",
        header: "Created At",
        cell: ({row}) => {
            return moment(row.getValue("created_at")).format("DD / MM / YYYY");
        },
    },
];