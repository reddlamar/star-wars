export default function Image({ source, size, alt }) {

    return (
        <img src={source} className={`${size} object-cover`} alt={alt} />
    );
}