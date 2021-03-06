package com.guihe.platform.core.domain;

import com.alibaba.fastjson.JSON;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.io.Serializable;

/**
 * Created by Chengcheng on 2018/12/12.
 */
@ApiModel(description= "返回响应数据")
public class Response implements Serializable{

    @ApiModelProperty(value = "响应信息说明")
    private String msg;

    @ApiModelProperty(value = "返回状态:10000-请求成功  20000-请求失败  20001-重新登录  200002-账号锁定")
    private Integer code;

    @ApiModelProperty(value = "响应参数")
    private Object data;

    private Response(Builder builder){
        this.msg = builder.message;
        this.code = builder.status;
        this.data = builder.data;
    }

    public Response message(String message){
        this.msg = message;
        return this;
    }

    public Response status(int status){
        this.code = status;
        return this;
    }

    public Response data(Object data){
        this.data = data;
        return this;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMessage() {
        return msg;
    }

    public void setMessage(String message) {
        this.msg = message;
    }

    public Integer getStatus() {
        return code;
    }

    public void setStatus(Integer status) {
        this.code = status;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public String getSuccess(){
        if(this.getStatus() == 10000){
            return "true";
        }
        return "false";
    }

    public static Response builder(ResponseCode code){
        return new Builder(code.number).build();
    }

    public static class Builder {
        private String message;

        private Integer status;

        private Object data;

        public Builder() {

        }

        public Builder(int status) {
            this.status = status;
        }


        public Builder msg(String message) {
            this.message = message;
            return this;
        }

        public Builder status(Integer status) {
            this.status = status;
            return this;
        }

        public Builder data(Object data){
            this.data=data;
            return this;
        }

        public Response build() {
            return new Response(this);
        }
    }

    public enum ResponseCode{

        SUCCESS(10000,"请求成功"),

        SUCCESS_BIND_MEMBER(10001,"请求成功，绑定账号"),

        FAILURE(20000,"请求失败"),

        DATA(20003,"数据统计中"),

        UPGRADE (20002,"站点升级中"),

        NEED_LOGIN(20001,"重新登录"),

        SMSCODE_LOGIN(200001,"短信登陆"),

        LOGIN_LOCK(200002,"账号锁定"),

        PASS_ERROR(50000,"审核失败"),

        SIGN_ERROR(40000,"签名失败"),

        UNAUTHORIZED(40001,"无访问权限"),

        TOKEN_INVALID(40002, "签证验证失败");


        private Integer number;
        private String message;

        ResponseCode(int number, String message){
            this.message = message;
            this.number = number;
        }

        public int getNumber() {
            return number;
        }

        public String getMessage() {
            return message;
        }

        public static String message(Integer number){
            if (number != null){
                ResponseCode[] values = ResponseCode.values();
                for (ResponseCode code : values){
                    if(code.getNumber() == number){
                        return code.getMessage();
                    }
                }
            }
            return null;
        }

        public static Integer number(String message){
            if (message != null){
                ResponseCode[] values = ResponseCode.values();
                for (ResponseCode code : values){
                    if(code.getMessage().equals(message)){
                        return code.getNumber();
                    }
                }
            }
            return null;
        }
    }

    @Override
    public String toString() {
        return JSON.toJSONString(this);
    }
}
