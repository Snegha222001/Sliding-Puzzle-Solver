package com.example.demo;

import com.example.demo.Board.Direction;

public class AStarState implements Comparable<AStarState> {
	private Board board;
	private Board.Direction dirToHere;
	private int distTo;
	private AStarState previous;

	public AStarState(AStarState previous, Board board, Board.Direction d) {
		this.board = board;
		if (previous != null) {
			this.previous = previous;
			this.distTo = previous.getDist() + AStar.cost(previous, board);
			this.dirToHere = d;
		} else {
			this.distTo = 0;
		}
	}

	public Board getBoard() {
		return board;
	}

	public int getDist() {
		return distTo;
	}

	public Board.Direction getDirection() {
		return this.dirToHere;
	}

	public AStarState getPrevious() {
		return previous;
	}

	public int getWeight() {
		return heuristic(board) + getDist();
	}

	private int heuristic(Board b) {
		Integer[][] board = b.getBoard();
		int size = b.getSize();

		int count = 0;
		for (int r = 0; r < size; r++) {
			for (int c = 0; c < size; c++) {
				int num = board[r][c];
				if (num == 0) {
					count += Math.abs(size - 1 - c);
					count += Math.abs(size - 1 - r);
				} else {
					count += Math.abs(((num - 1) / size) - r); // row difference
					count += Math.abs(Math.abs((num - 1)) % size - c); // column difference	
				}
			}
		}

		return count;
	}

	@Override
	public boolean equals(Object other) {
		if (other instanceof AStarState) {
			return this.getBoard().equals(((AStarState) other).getBoard());
		} 
		return false;
	}

	@Override
	public int compareTo(AStarState o) {
		int a = this.getWeight();
		int b = o.getWeight();
		return a - b;
	}
}
