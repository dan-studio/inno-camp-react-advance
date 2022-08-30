import styled from "styled-components";
import Item from "./Item";
import { useSelector } from "react-redux";

const List = () => {
    const musicList = useSelector((state) => state.musics.list);

    return (
        <ListDiv>
            {musicList.map((music) => {
                if (music.artist) {
                    return <Item {...music} key={music.id} />;
                } else {
                    return null;
                }
            })}
        </ListDiv>
    );
};
const ListDiv = styled.div`
    width: 800px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
`;

export default List;
