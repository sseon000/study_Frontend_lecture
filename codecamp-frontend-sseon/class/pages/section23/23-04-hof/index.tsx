import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingPaMovedge(): JSX.Element {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage =
    (page: number) =>
    // (event: MouseEvent<HTMLSpanElement>): void => {
    (): void => {
      void refetch({ page });
    };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}

      {new Array(10).fill(1).map((_, index) => (
        // <span key={index + 1} id={String(index + 1)} onClick={onClickPage}></span>
        <span key={index + 1} onClick={onClickPage(index + 1)}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
