export function getImgSrc(name) {
    const imgSrcs = ['luke', 'c-3po', 'leia', 'r2-d2', 'r5-d4', 'vader', 'owen', 'beru', 'obi', 'biggs'];    

    const src = imgSrcs.find(src => {
        if (name?.toLowerCase().includes(src)) {
            return src;
        };
    });
    
    return `/${src}.webp`;
}