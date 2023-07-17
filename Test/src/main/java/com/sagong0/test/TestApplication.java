package com.sagong0.test;

import com.sagong0.test.entity.Testdb;
import com.sagong0.test.repository.TestRepository;
import com.sagong0.test.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.annotation.Id;

import java.util.*;

@SpringBootApplication
public class TestApplication {

	public static void main(String[] args) {
		SpringApplication.run(TestApplication.class, args).getBean(TestApplication.class).execute();
	}

	@Autowired
	TestService service;

	private void execute() {
		// 등록 처리
//		setup();
		// 전체 항목 취득
//		showList();

		// 한개 항목 취득
//		showOne();

		//변경처리
		//updateTest();

		//삭제처리
		//deleteTest();
		// 퀴즈 실행
		doTest();
	}


	private void setup(){
		System.out.println(" --- 등록 처리 개시 --- ");
		Testdb test1 = new Testdb(null, "JDK는 JRE와 컴파일러 등의 개발 도구가 포함 된다.", true, "이철의");
		Testdb test2 = new Testdb(null, "자바 프로그램을 개발하려면 JDK가 반드시 필요하다", true, "이철의");
		Testdb test3 = new Testdb(null, "바이트 코드는 JVM에 독립적이지만, JVM은 운영체제에 종속적이다.", true, "이철의");
		Testdb test4 = new Testdb(null, "자바 프로그램을 실행만 하려면 " + "JRE를 설치해도 상관없다.", true, "이철의");
		Testdb test5 = new Testdb(null, "JVM은 운영체제별로 동일한 JVM이 사용된다.", false, "홍길동");

		//리스트에 엔티티를 저장
		List<Testdb> testList = new ArrayList<>();
		Collections.addAll(testList,test1,test2,test3,test4,test5);
		// 등록 실행
		for(Testdb testdb : testList){
			// 등록 실행
			service.insertTest(testdb);
		}
		// 등록 확인
		System.out.println(" --- 등록 처리 완료 --- ");

//		test1 = repository.save(test1);
		System.out.println("등록한 퀴즈는 , " + test1 + "입니다.");

		// 엔티티 생성
//		Testdb test2 = new Testdb(null, "자바 프로그램을 개발하려면 JDK가 반드시 필요하다..", true, "이철의");
		// 엔티티 삽입 (등록)
//		test2 = repository.save(test2);

		System.out.println("등록한 퀴즈는 , " + test2 + "입니다.");
	}

	private void showList(){
		System.out.println("--- 모든 데이터 취득 개시 --- ");
		Iterable<Testdb> testzes = service.selectAll();
		for(Testdb testdb : testzes){
			System.out.println(testdb);
		}

		System.out.println("---- 모든 데이터 취득 완료 --- ");
	}

	private void showOne(){
		System.out.println("--- 1건 취득 개시 --- ");
		Optional<Testdb> testOpt = service.selectOneById(1);

		//true면 있다는 뜻
		if(testOpt.isPresent()){
			System.out.println(testOpt.get());
		}else{
			System.out.println("해당 데이터는 존재하지 않습니다.");
		}
		System.out.println("--- 1건 취득 완료 --- ");
	}
	private void updateTest(){
		System.out.println("변경 처리 개시");
		Testdb testdb1 = new Testdb(1,"JVM은 운영체제별로 동일한 JVM이 사용된다.",false,"홍길동");
		service.updateTest(testdb1);
		System.out.println("변경된 데이터는 :" + testdb1 + "입니다.");
		System.out.println("변경 처리 완료");
	}

	private void deleteTest(){
		System.out.println("----------삭제 처리 개시 ---------");
		service.deleteTestById(2);
		System.out.println("----------삭제 처리 완료 ---------");
	}

	private void doTest(){
		System.out.println("--- 퀴즈 1건 취득 게시 ---");
		Optional<Testdb> testOpt = service.selectOneRandomTest();
		if(testOpt.isPresent()){
			System.out.println(testOpt.get());
		}else{
			System.out.println("해당 데이터는 존재하지 않습니다.");
		}
		System.out.println("-- 퀴즈 1건 취득 완료 -- ");
		Boolean myAnswer = true;
		Integer id = testOpt.get().getId();
		if(service.checkTest(id, myAnswer)){
			System.out.println("정답입니다. !! ");
		}else{
			System.out.println("오답입니다.,,");
		}
	}
}
