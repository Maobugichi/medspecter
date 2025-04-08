const Extras = ({content,src,alt}) => {
    return (
        <li className="flex h-5 items-center gap-2 p-4 text-[14px]"><img src={src} alt={alt} />{content}</li>
    )
}

export default Extras