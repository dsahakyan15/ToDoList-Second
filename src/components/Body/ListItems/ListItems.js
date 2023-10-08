import ListItem from "./ListItem"

export default function ListItems({ data,onCheckedDone }) {
    return (
        <div>
            {
                data.map((obj) => {
                return <ListItem data={obj} id={obj.key} onCheckedDone={onCheckedDone} key={obj.key}/>
                })
            }

        </div>
    )
}
