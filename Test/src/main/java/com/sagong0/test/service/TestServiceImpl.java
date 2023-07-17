package com.sagong0.test.service;

import com.sagong0.test.entity.Testdb;
import com.sagong0.test.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class TestServiceImpl implements TestService{

    @Autowired
    TestRepository repository;

    @Override
    public Iterable<Testdb> selectAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Testdb> selectOneById(Integer id) {
        Integer readId = repository.getRandomId();

        if (readId == null){
            return Optional.empty();
        }
        return repository.findById(readId);
    }

    @Override
    public Optional<Testdb> selectOneRandomTest() {
        Integer randId = repository.getRandomId();
        if (randId == null) {
            return Optional.empty();
        }
        return repository.findById(randId);

    }

    @Override
    public Boolean checkTest(Integer id, Boolean myAnswer) {
        boolean check = false;
        Optional<Testdb> optTest = repository.findById(id);

        if(optTest.isPresent()){
            Testdb testdb = optTest.get();
            if(testdb.getAnswer().equals(myAnswer)){
                check = true;
            }
        }
        return check;
    }

    @Override
    public void insertTest(Testdb testdb) {
        repository.save(testdb);
    }

    @Override
    public void updateTest(Testdb testdb) {
        repository.save(testdb);
    }

    @Override
    public void deleteTestById(Integer id) {
        repository.deleteById(id);
    }
}
