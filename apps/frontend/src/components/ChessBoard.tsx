import { Chess, Color, PieceSymbol, Square } from "chess.js";
import { useState } from "react";
import { MOVE } from "../screens/Game";
import MovesTable from "./MovesTable";

export const ChessBoard = ({
  chess,
  board,
  socket,
  setBoard,
  status,
}: {
  chess: Chess;
  setBoard: React.Dispatch<
    React.SetStateAction<
      ({
        square: Square;
        type: PieceSymbol;
        color: Color;
      } | null)[][]
    >
  >;
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][];
  socket: WebSocket | null;
  status: boolean;
}) => {
  const [from, setFrom] = useState<null | Square>(null);

  // Add moves int his section also for giving live updates for the moves

  return (
    <div className="flex">
      <div className="text-white-200 mr-10">
        {board.map((row, i) => {
          return (
            <div key={i} className="flex">
              {row.map((square, j) => {
                const squareRepresenation = (String.fromCharCode(97 + (j % 8)) +
                  "" +
                  (8 - i)) as Square;
                return (
                  <div
                    onClick={() => {
                      if (!status) {
                        return;
                      }
                      if (!from) {
                        setFrom(squareRepresenation);
                      } else {
                        socket?.send(
                          JSON.stringify({
                            type: MOVE,
                            payload: {
                              move: {
                                from,
                                to: squareRepresenation,
                              },
                            },
                          })
                        );
                        setFrom(null);
                        chess.move({
                          from: from as Square,
                          to: squareRepresenation,
                        });

                        setBoard(chess.board());
                        console.log({ from, squareRepresenation });
                      }
                    }}
                    key={j}
                    className={`w-16 h-16 ${
                      (i + j) % 2 === 0 ? "bg-green-500" : "bg-white"
                    }`}
                  >
                    <div className="w-full justify-center flex h-full">
                      <div className="h-full justify-center flex flex-col ">
                        {square ? (
                          <img
                            src={`/${
                              square?.color === "b"
                                ? square?.type
                                : `${square?.type?.toUpperCase()}`
                            }.png`}
                            alt=""
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
