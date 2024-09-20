package com.sha.flightmanager.services;

import com.sha.flightmanager.dto.VolRequest;
import com.sha.flightmanager.dto.VolResponse;
import com.sha.flightmanager.mapper.VolMapper;
import com.sha.flightmanager.model.Avion;
import com.sha.flightmanager.model.Pilote;
import com.sha.flightmanager.model.Vol;
import com.sha.flightmanager.repositories.VolRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class VolServiceTest {

    @Mock
    private VolRepository volRepository;

    @Mock
    private VolMapper volMapper;

    @InjectMocks
    private VolService volService;
    private List<Pilote> pilotes;
    private List<Avion> avions;
    private List<Vol> vols;

     @BeforeEach
     void setUp() {
        MockitoAnnotations.openMocks(this);
         pilotes = new ArrayList<>();
         for (int i = 1; i <= 5; i++) {
             pilotes.add(new Pilote(i, "FirstName" + i, "LastName" + i));
         }


         avions = new ArrayList<>();
         for (int i = 1; i <= 5; i++) {
             avions.add(new Avion(i, "Model" + i, 100 + i * 50, "Location" + i));
         }


         vols = new ArrayList<>();
         for (int i = 0; i < 5; i++) {
             Vol vol = new Vol(
                     "V" + (i + 1),
                     pilotes.get(i),
                     avions.get(i),
                     "CityDep" + (i + 1),
                     "CityArr" + (i + 1),
                     "10:0" + (i + 1),
                     "12:0" + (i + 1)
             );
             vols.add(vol);
         }
    }

    @Test
    void should_successfully_return_all_vols() {

        List<VolResponse> expectedResponses = new ArrayList<>();
        for (Vol vol : vols) {
            expectedResponses.add(new VolResponse(
                    vol.getNumVol(),
                    vol.getPilote(),
                    vol.getAvion(),
                    vol.getVilleDep(),
                    vol.getVilleArr(),
                    vol.getHeureDep(),
                    vol.getHeureArr()
            ));
        }


        when(volRepository.findAll()).thenReturn(vols);
        when(volMapper.fromVol(any(Vol.class))).thenAnswer(invocation -> {
            Vol vol = invocation.getArgument(0);
            return new VolResponse(
                    vol.getNumVol(),
                    vol.getPilote(),
                    vol.getAvion(),
                    vol.getVilleDep(),
                    vol.getVilleArr(),
                    vol.getHeureDep(),
                    vol.getHeureArr()
            );
        });


        List<VolResponse> response = volService.findAll();


        assertEquals(expectedResponses.size(), response.size());
        for (int i = 0; i < expectedResponses.size(); i++) {
            assertEquals(expectedResponses.get(i), response.get(i));
        }
        verify(volRepository, times(1)).findAll();
        verify(volMapper, times(vols.size())).fromVol(any(Vol.class));
    }
    @Test
    void should_return_vols_by_pilote_and_avion_ordered_by_date() {
        // Given
        Integer numPilote = 1;
        Integer numAvion = 1;

        // Simulate vols filtered by pilote and avion
        List<Vol> filteredVols = new ArrayList<>();
        filteredVols.add(vols.get(0)); // Assuming vols[0] has numPilote 1 and numAvion 1

        List<VolResponse> expectedResponses = new ArrayList<>();
        for (Vol vol : filteredVols) {
            expectedResponses.add(new VolResponse(
                    vol.getNumVol(),
                    vol.getPilote(),
                    vol.getAvion(),
                    vol.getVilleDep(),
                    vol.getVilleArr(),
                    vol.getHeureDep(),
                    vol.getHeureArr()
            ));
        }

        // When
        when(volRepository.findAllByNumpiloteAndNumavionOrderByDate(numPilote, numAvion)).thenReturn(filteredVols);
        when(volMapper.fromVol(any(Vol.class))).thenAnswer(invocation -> {
            Vol vol = invocation.getArgument(0);
            return new VolResponse(
                    vol.getNumVol(),
                    vol.getPilote(),
                    vol.getAvion(),
                    vol.getVilleDep(),
                    vol.getVilleArr(),
                    vol.getHeureDep(),
                    vol.getHeureArr()
            );
        });

        // Act
        List<VolResponse> actualResponse = volService.findIdByPiloteAndAndAvion(numPilote, numAvion);

        // Then
        assertEquals(expectedResponses.size(), actualResponse.size());
        for (int i = 0; i < expectedResponses.size(); i++) {
            assertEquals(expectedResponses.get(i), actualResponse.get(i));
        }

        verify(volRepository, times(1)).findAllByNumpiloteAndNumavionOrderByDate(numPilote, numAvion);
        verify(volMapper, times(filteredVols.size())).fromVol(any(Vol.class));
    }



    @Test
    void should_return_num_vol_when_save_successfully() {
        // Given
        VolRequest request = new VolRequest("V10", 1, 1, "Paris", "London", "10:00", "12:00");

        Pilote pilote = new Pilote(1, "John", "Doe");
        Avion avion = new Avion(1, "Boeing 747", 300, "Airport A");
        Vol vol = new Vol("V10", pilote, avion, "Paris", "London", "10:00", "12:00");

        when(volMapper.toVol(request)).thenReturn(vol);
        when(volRepository.save(vol)).thenReturn(vol);

        // When
       volService.save(request);


        verify(volMapper).toVol(request);
        verify(volRepository).save(vol);
    }
}
