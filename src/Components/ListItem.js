function ListItem(props, itemCount) {
    console.log(props.children)
    console.log(itemCount)
    return (
        <li>{props.children}</li>
        // <li>{itemCount}</li>
    )
}

export default ListItem;