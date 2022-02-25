import type { MenuDataItem } from './typings';
import type { ProSettings } from './defaultSettings';
export declare const matchParamsPath: (pathname: string, breadcrumb?: Record<string, MenuDataItem> | undefined, breadcrumbMap?: Map<string, MenuDataItem> | undefined) => MenuDataItem;
export declare type GetPageTitleProps = {
    pathname?: string;
    breadcrumb?: Record<string, MenuDataItem>;
    breadcrumbMap?: Map<string, MenuDataItem>;
    menu?: ProSettings['menu'];
    title?: ProSettings['title'];
    pageName?: string;
    formatMessage?: (data: {
        id: any;
        defaultMessage?: string;
    }) => string;
};
/**
 * 获取关于 pageTitle 的所有信息方便包装
 *
 * @param props
 * @param ignoreTitle
 */
declare const getPageTitleInfo: (props: GetPageTitleProps, ignoreTitle?: boolean | undefined) => {
    title: string;
    id: string;
    pageName: string;
};
export { getPageTitleInfo };
declare const getPageTitle: (props: GetPageTitleProps, ignoreTitle?: boolean | undefined) => string;
export default getPageTitle;
