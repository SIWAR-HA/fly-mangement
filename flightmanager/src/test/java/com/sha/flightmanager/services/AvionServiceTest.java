package com.sha.flightmanager.services;

import com.sha.flightmanager.dto.AvionResponse;
import com.sha.flightmanager.mapper.AvionMapper;
import com.sha.flightmanager.model.Avion;
import com.sha.flightmanager.repositories.AvionRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

public class AvionServiceTest {

    @Mock
    private AvionRepository avionRepository;

    @Mock
    private AvionMapper avionMapper;

    @InjectMocks
    private AvionService avionService;

    public AvionServiceTest() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
     void should_successfully_return_all_avions() {
        // Arrange
        List<Avion> avions = new ArrayList<>();
        Avion avion = new Avion(1, "Boeing 747", 400, "New York");
        avions.add(avion);


        when(avionRepository.findAll()).thenReturn(avions);
        when(avionMapper.fromAvion(any(Avion.class)))
                .thenReturn(new AvionResponse(1, "Boeing 747", 400, "New York"));


        List<AvionResponse> response = avionService.findAll();


        assertEquals(avions.size(), response.size());
        assertEquals(1, response.get(0).numAvion());
        assertEquals("Boeing 747", response.get(0).nomAvion());
        assertEquals(400, response.get(0).capacite());
        assertEquals("New York", response.get(0).localisation());
        verify(avionRepository).findAll();
    }
}
