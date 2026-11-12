// Keep few: prohibits as each cache cost quota
const INLINE_W = [400, 800, 1200];

export function cdn_image(url: string, width = 800, quality = 75): string {
    if (!import.meta.env.PROD) {
        return url;
    }
    return `/cdn-cgi/image/width=${width},quality=${quality},format=auto/${url}`;
}

export function cdn_srcset(url: string, transfw = INLINE_W): string {
    return transfw.map((w) => `${cdn_image(url, w)} ${w}w`).join(", ");
}
