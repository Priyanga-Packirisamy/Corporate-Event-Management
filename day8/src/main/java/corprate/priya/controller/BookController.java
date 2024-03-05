package corprate.priya.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import corprate.priya.dto.request.BookRequest;
import corprate.priya.dto.response.BookListResponse;
import corprate.priya.dto.response.BookResponse;
import corprate.priya.service.BookService;
import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/book")
@PreAuthorize("hasRole('ADMIN')")
@RequiredArgsConstructor
public class BookController {

    private final BookService bookService;

    @PreAuthorize("hasAuthority('admin:create')")
    @PostMapping("/add")
    public ResponseEntity<?> createEvents(@RequestBody BookRequest eventsrequest){
        BookResponse response = new BookResponse();

        try{
            response = bookService.createBook(eventsrequest);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllEvents(){

        BookListResponse bookListResponse = new BookListResponse();

        try{
            bookListResponse = bookService.getAllBook();
            return new ResponseEntity<>(bookListResponse, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(bookListResponse, HttpStatus.EXPECTATION_FAILED);
        }
    }
}
