package corprate.priya.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookRequest {
    private String eventid;
    private String orgid;
    private String bookdate;
    private String eventdate;
    private String status;
    private String city;
    private int count;
    private int paid;
}

