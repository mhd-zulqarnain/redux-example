function Header(props) {
console.warn("Header",props.data.cardItems.length)

    return (
        <div>
            <h4>{props.data.cardItems.length}</h4>
        </div>
    )
}

export default Header
