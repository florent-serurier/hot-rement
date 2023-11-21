type ButtonProps = {
    size: string,
    children: string,
    currentCount: number,
    totalCount: number,
    cb: (e: React.MouseEvent<HTMLAnchorElement>) => void,
}

function classes(size: string) {
    return `button button--${size}`;
}

export function Button (
    {size, currentCount, totalCount, cb, children}: ButtonProps
) {
    return <a onClick={cb} className={classes(size)} href="#">
        {children}
        <span className="button__count">{currentCount} / {totalCount}</span>
    </a>
}
