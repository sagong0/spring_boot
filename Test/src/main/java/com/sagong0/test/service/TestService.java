package com.sagong0.test.service;

import com.sagong0.test.entity.Testdb;

import java.util.Optional;

public interface TestService {
    // 데이터를 전부 가져온다.
    Iterable<Testdb> selectAll();
    // 데이터를 한건 가져온다.
    Optional<Testdb> selectOneById(Integer id);
    // 데이터를 랜덤으로 한건 가져온다.
    Optional<Testdb> selectOneRandomTest();
    // 데이터의 true false 여부를 판단

    Boolean checkTest(Integer id, Boolean myAnswer);

    // 퀴즈 등록
    void insertTest(Testdb testdb);

    void updateTest(Testdb testdb);

    void deleteTestById(Integer id);
}
