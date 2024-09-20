package com.sha.flightmanager.services;

import com.sha.flightmanager.dto.VolRequest;
import com.sha.flightmanager.dto.VolResponse;
import com.sha.flightmanager.mapper.VolMapper;
import com.sha.flightmanager.model.Vol;
import com.sha.flightmanager.repositories.VolRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
@RequiredArgsConstructor
public class VolService {
    private  final VolRepository volRepository;
    private final VolMapper volMapper;

        public List<VolResponse> findAll() {
            return volRepository
                    .findAll()
                    .stream()
                    .map(volMapper::fromVol)
                    .collect(Collectors.toList());
        }

    public List<VolResponse> findIdByPiloteAndAndAvion(Integer numpilote, Integer numavion) {
        return volRepository
                .findAllByNumpiloteAndNumavionOrderByDate(numpilote, numavion)
                .stream()
                .map(volMapper::fromVol)
                .collect(Collectors.toList());
    }

    public void save(VolRequest request) {
        Vol vol = volMapper.toVol(request);

         volRepository.save(vol);
    }
}