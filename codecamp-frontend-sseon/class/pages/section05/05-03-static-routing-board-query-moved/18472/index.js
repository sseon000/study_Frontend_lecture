import { useQuery, gql } from '@apollo/client';

const FETCH_BOARD = gql`
    query{
        fetchBoard(number: 18472){
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutingPaMovedge(){
    const { data } = useQuery(FETCH_BOARD);

    console.log(data);

    return (
        <div>
            <div>18472번 게시글로 이동이 완료되었습니다.</div>
            <div>작성자 : {data && data.fetchBoard?.writer}</div>
            <div>제목 : {data && data.fetchBoard?.title}</div>
            <div> 내용 : {data && data.fetchBoard?.contents}</div>
        </div>
    )
}