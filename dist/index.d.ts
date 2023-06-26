export declare function transform(html: string, options?: Options): string;
export interface Options {
    /**
     * 每次询问间隔时间，默认1000ms
     */
    interval: number;
    /**
     * 是否启用，默认开启
     */
    enable: boolean;
    /**
     * 插槽
     */
    beforeHtml: string;
    afterHtml: string;
}
