package com.sagong0.test.repository;

import com.sagong0.test.entity.Testdb;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

public interface TestRepository extends CrudRepository<Testdb, Integer> {
    @Query("SELECT id FROM testdb ORDER by RANDOM() limit 1")
    Integer getRandomId();
}


