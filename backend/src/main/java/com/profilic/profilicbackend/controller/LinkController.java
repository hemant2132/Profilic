package com.profilic.profilicbackend.controller;

import com.profilic.profilicbackend.model.Link;
import com.profilic.profilicbackend.repository.LinkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController @RequestMapping("/api/links") public class LinkController {
    @Autowired LinkRepository linkRepo;

    // Get all links
    @RequestMapping(value = "", method = RequestMethod.GET) public List<Link> getAllLinks() {
        return linkRepo.getAll();
    }

    // Create a new link
    @RequestMapping(value = "", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void createLink(@RequestBody Link link) {
        linkRepo.create(link);
    }

    // Get a link
    @RequestMapping(value = "/{linkId}", method = RequestMethod.GET) public Link getLink(
            @PathVariable("linkId") String linkId) {
        return linkRepo.get(linkId);
    }

    // Update a link
    @RequestMapping(value = "/{linkId}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void updateLink(@PathVariable("linkId") String linkId, @RequestBody Link link) {
        linkRepo.update(linkId, link);
    }

    // Delete a link
    @RequestMapping(value = "/{linkId}", method = RequestMethod.DELETE) public void deleteLink(
            @PathVariable("linkId") String linkId) {
        linkRepo.delete(linkId);
    }
}
