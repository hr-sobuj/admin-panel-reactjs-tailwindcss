export default function Badge({ text, classNames }) {
    return (
        <>
            <span className={`${classNames} text-[.8rem] font-bold uppercase rounded-[.25rem] px-[.23rem] py-px`}>{text}</span>
        </>
    )
}