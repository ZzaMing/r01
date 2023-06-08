package org.example;

import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class ServerEx1 {

    public static void main(String[] args) throws Exception{

        // 서버 소켓 준비 포트 필요
        ServerSocket serverSocket = new ServerSocket(8080);
        System.out.println("Server Ready...");

        // 연결 기다리다가 확인
        for (int i = 0; i < 100; i++) {
            Socket clientSocket = serverSocket.accept();
            System.out.println(clientSocket);

            // 읽기 위한 InputStream 필요
            InputStream in = clientSocket.getInputStream();

            // 파일에 저장하기 위한 빨대
            FileOutputStream fos = new FileOutputStream("C:\\zzz\\client"+i+".jpg");

            // 읽고 쓰기
            while (true) {
                int data = in.read();
                if (data == -1) {
                    System.out.println("저장완료");
                    break;
                }
                fos.write(data);
            }// end while

            in.close();
            fos.close();
            clientSocket.close();

            // 3번 읽기
//            System.out.println(in.read());
//            System.out.println(in.read());
//            System.out.println(in.read());
        }
    }
}
