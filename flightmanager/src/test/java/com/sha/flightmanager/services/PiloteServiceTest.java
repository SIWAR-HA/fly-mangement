package com.sha.flightmanager.services;

import com.sha.flightmanager.dto.PiloteResponse;
import com.sha.flightmanager.mapper.PiloteMapper;
import com.sha.flightmanager.model.Pilote;
import com.sha.flightmanager.repositories.PiloteRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class PiloteServiceTest {


    @Mock
    private PiloteRepository piloteRepository;

    @Mock
    private PiloteMapper piloteMapper;

    @InjectMocks
    private PiloteService piloteService;
   private Pilote pilote1;
    private Pilote pilote2;
    private PiloteResponse response1;
    private PiloteResponse response2;
    @BeforeEach
    public void setUp() {

        MockitoAnnotations.openMocks(this);
         pilote1 = new Pilote(1, "John Doe", "123 Street A");
         pilote2 = new Pilote(2, "Jane Doe", "456 Street B");
         response1 = new PiloteResponse(1, "John Doe", "123 Street A");
         response2 = new PiloteResponse(2, "Jane Doe", "456 Street B");

    }

    @Test
    public void should_successfully_return_all_pilotes() {
        when(piloteRepository.findAll()).thenReturn(Arrays.asList(pilote1, pilote2));
        when(piloteMapper.fromPilote(pilote1)).thenReturn(response1);
        when(piloteMapper.fromPilote(pilote2)).thenReturn(response2);
        List<PiloteResponse> result = piloteService.findAll();
        assertNotNull(result);
        assertEquals(2, result.size());
        assertEquals(response1, result.get(0));
        assertEquals(response2, result.get(1));
        verify(piloteRepository, times(1)).findAll();
        verify(piloteMapper, times(1)).fromPilote(pilote1);
        verify(piloteMapper, times(1)).fromPilote(pilote2);
    }

}