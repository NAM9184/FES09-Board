import {useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

BoardListItem.propTypes = {
    item: PropTypes.object.isRequired
}


function BoardListItem({item}){
    const navigate = useNavigate();
    return(
        <tr className="border-b border-gray-200 hover:bg-gray-200 transition duration-300 ease-in-out">
            <td className="p-2 text-center">{item._id}</td>
            <td className="p-2 truncate cursor-pointer indent-4"onClick={() => navigate(`/boards/${item._id}`)}>{item.title}</td>
            <td className="p-2 truncate">{item.user.name}</td>
            <td className="p-2 truncate hidden sm:table-cell">{item.user.views}</td>
            <td className="p-2 truncate hidden sm:table-cell">{item.repliesCount}</td>
            <td className="p-2 truncate  text-center hidden sm:table-cell">{item.updatedAt }</td>
        </tr>
    )
}


export default BoardListItem;