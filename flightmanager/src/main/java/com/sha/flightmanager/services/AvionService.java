package com.sha.flightmanager.services;

import com.sha.flightmanager.dto.AvionResponse;
import com.sha.flightmanager.mapper.AvionMapper;
import com.sha.flightmanager.repositories.AvionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
@RequiredArgsConstructor
public class AvionService {
    private final AvionRepository avionRepository;
    private final AvionMapper avionMapper;
    public List<AvionResponse> findAll() {

        return avionRepository
                .findAll()
                .stream()
                .map(avionMapper::fromAvion)
                .collect(Collectors.toList());
    }
}
