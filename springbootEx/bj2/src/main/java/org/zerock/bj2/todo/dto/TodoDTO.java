package org.zerock.bj2.todo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TodoDTO {
    
    private Long tno;
    private String title;
    private String content;
    private String writer;
    private String dueDate;
}
