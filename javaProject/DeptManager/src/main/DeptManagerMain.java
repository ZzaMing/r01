package main;

import java.util.Scanner;

import controller.DeptListController;

public class DeptManagerMain {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);

		while (true) {
			System.out.println("메뉴를 입력하세요.");
			System.out.println("1. 부서 리스트 출력");
			System.out.println("2. 부서 검색");
			System.out.println("3. 부서 입력");
			System.out.println("4. 부서 수정");
			System.out.println("5. 부서 삭제");
			System.out.println("6. 프로그램 종료");

			int menu = Integer.parseInt(sc.nextLine());

			switch (menu) {
			case 1:
				new DeptListController().getDeptList();
				break;
			case 6:
				return;
			}

		}

	}

}
