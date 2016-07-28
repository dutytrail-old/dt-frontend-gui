package com.dutytrail.frontend.gui.service;

import com.dutytrail.frontend.gui.model.ApiOutput;
import com.dutytrail.frontend.gui.model.Duty;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
public class DutyTrailAPIService {

    @RequestMapping(value = "/list/duty/{userId}", method = RequestMethod.POST)
	public List<Duty> getDutyList(@PathVariable Long userId) {
		RestTemplate rest = new RestTemplate();

        String listDutyUri = "http://dt-frontend-api.herokuapp.com/duty/list/"+userId;

        ApiOutput reportListJson = rest.getForObject(listDutyUri, ApiOutput.class);
        return (List<Duty>) reportListJson.getContent();
	}
}