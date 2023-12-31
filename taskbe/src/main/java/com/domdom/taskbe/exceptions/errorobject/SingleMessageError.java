package com.domdom.taskbe.exceptions.errorobject;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@EqualsAndHashCode(callSuper = true)
@Getter
@Setter
public class SingleMessageError extends ErrorObject{
    private String message;

    public SingleMessageError(int statusCode, String message, Date timestamp) {
        super(statusCode, timestamp);
        this.message = message;
    }
}
