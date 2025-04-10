export namespace $Enums {
    export const Platform: {
        MOBILE: 'MOBILE', TABLET: 'TABLET', DESKTOP: 'DESKTOP'
    };

    export type Platform = (typeof Platform)[keyof typeof Platform]
}