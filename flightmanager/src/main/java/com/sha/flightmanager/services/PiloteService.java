package com.sha.flightmanager.services;


import com.sha.flightmanager.dto.PiloteResponse;
import com.sha.flightmanager.mapper.PiloteMapper;
import com.sha.flightmanager.repositories.PiloteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.stream.Collectors;



@Service

@RequiredArgsConstructor
public class PiloteService {
    private final PiloteRepository piloteRepository;
    private final PiloteMapper piloteMapper;


    public List<PiloteResponse> findAll() {
        return piloteRepository
                .findAll()
                .stream()
                .map(piloteMapper::fromPilote)
                .collect(Collectors.toList());
    }
}

