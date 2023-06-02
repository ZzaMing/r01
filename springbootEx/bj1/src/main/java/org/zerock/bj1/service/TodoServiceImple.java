package org.zerock.bj1.service;

import org.springframework.stereotype.Service;
import org.zerock.bj1.mappers.TimeMapper;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
@RequiredArgsConstructor
public class TodoServiceImple implements TodoService{
    
    private final TimeMapper timeMapper;

}