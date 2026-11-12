type Opts = {
    width?: number;
    height?: number;
    fit?: "scale-down" | "cover" | "contain";
    quality?: number;
};

export function cdn_image(url: string, o: Opts = {}): string {
    if (!import.meta.env.PROD) {
        return url;
    }
    const { width, height, fit = "scale-down", quality = 85 } = o;
    const p = [
        width && `width=${width}`,
        height && `height=${height}`,
        `fit=${fit}`,
        `quality=${quality}`,
        "metadata=none",
        "format=auto",
    ].filter(Boolean);
    return `/cdn-cgi/image/${p.join(",")}/${url}`;
}

export function cdn_srcset(url: string, sizes = [800, 1200]): string {
    return sizes.map((s) => `${cdn_image(url, { width: s, height: s })} ${s}w`).join(", ");
}
