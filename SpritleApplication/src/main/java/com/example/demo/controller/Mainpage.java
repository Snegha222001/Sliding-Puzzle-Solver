package com.example.demo.controller;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.AStar;
import com.example.demo.Board;


@RestController
@RequestMapping("/mainpage")
@CrossOrigin(origins="http://localhost:3000")
public class Mainpage {
	@GetMapping("/hello")
	public String likeOffer()
	{
		return "hellooo";
	}
	

	@PostMapping("/puzzle/{size}")
	public ArrayList<Integer> likeOffer( @PathVariable("size") int size,@RequestParam("x" ) String[] arr)
	{	
		Integer[][] number = new Integer[size][size];
		int counter = 0;
		for (int r = 0; r < size; r++) {
			for (int c = 0; c < size; c++) {
				number[r][c] = Integer.parseInt(arr[counter++]);
			}
		}
		boolean verbose = false;
		Board board = new Board(number);
		AStar solution = new AStar(board, verbose);
		return solution.run();
	}
	
}
