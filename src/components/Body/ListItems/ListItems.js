import ListItem from "./ListItem"

export default function ListItems({ data }) {
    return (
        <div>
            {
                data.map((obj) => {
                return <ListItem data={obj} key={obj.key}/>
                })
            }

        </div>
    )
}
