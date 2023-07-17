package com.example.demo.validator;
import com.example.demo.form.CalcForm;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

// @Controller @Service(도메인 서비스) @Repository(DB)
// @Component (etc..)
@Component
public class CalcValidator implements Validator {
    @Override
    public boolean supports(Class<?> clazz) {
        // 인수로 전달받은 From 이 입력 체크의 대상인지를 논리값으로 돌려준다.
        return CalcForm.class.isAssignableFrom(clazz);
    }

    @Override
    public void validate(Object target, Errors errors) {
        CalcForm form = (CalcForm) target;
        if(form.getLeftNum() != null && form.getRightNum() != null){
            // 왼쪽 홀수 이면서 오른쪽 짝수 (짝수, 홀수)
            if(!((form.getLeftNum() % 2 == 1) && (form.getRightNum() % 2 == 0))){
                errors.reject("com.example.demo.validator.CalcValidator.message");
            }
        }
    }
}
