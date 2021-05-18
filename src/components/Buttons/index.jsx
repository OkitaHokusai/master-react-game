import "../index.css"
export const travelBtn = (props) =>{
    return (
        <>
        <button className="btn">{props.children}</button>
        </>
    )
}