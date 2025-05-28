package br.unijorge.avaliaamado.repository;

import br.unijorge.avaliaamado.model.Evento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;


@Repository
public interface EventoRepository extends JpaRepository<Evento, Long> {
    
    Evento findByNome(String nome);//Buscando por nome

    List<Evento> findByLocal(String local);//Listando por local

    List<Evento> findByDataInicial(LocalDate dataInicial);//Listando por data

    List<Evento> findAllByOrderByNotaDesc();

    Optional<Evento> findById(long id); // Método para buscar o evento por ID
}
