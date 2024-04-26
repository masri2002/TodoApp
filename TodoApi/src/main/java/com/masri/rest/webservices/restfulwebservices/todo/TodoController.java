package com.in28minutes.rest.webservices.restfulwebservices.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class TodoController {
    @Autowired
    private TodoService  todoService;
@GetMapping("/users/{username}/todos")
    public ResponseEntity<?> RetrieveAllTodos(@PathVariable String username){
    return ResponseEntity.ok(todoService.findByUsername(username));
}
@GetMapping("/users/{username}/todos/{id}")
    public ResponseEntity<?> RetrieveTodo (@PathVariable String username , @PathVariable int id){
    return ResponseEntity.ok(todoService.findById(id));
}
    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<?> DeleteTodo (@PathVariable String username , @PathVariable int id){
    todoService.deleteById(id);
    return ResponseEntity.ok("deleted");
    }
@PutMapping("/users/{username}/todos/{id}")
    public ResponseEntity<?> UpdateTodo (@PathVariable String username ,@PathVariable int id ,@RequestBody Todo todo){
    Todo todo1 =todoService.findById(id);
    todoService.updateTodo(todo);
    return ResponseEntity.ok("updated");
}
@PostMapping("/users/{username}/todos") ResponseEntity<?> AddNewTodo(@PathVariable String username ,@RequestBody Todo todo){
    todoService.addTodo(todo.getUsername(),todo.getDescription(),todo.getTargetDate(),todo.isDone());
    return ResponseEntity.ok(todo);
}

}
