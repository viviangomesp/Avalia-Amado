package br.unijorge.avaliaamado.repository;

import br.unijorge.avaliaamado.model.Evento;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;


@Repository
public interface EventoRepository extends JpaRepository<Evento, Long> {
    
    Evento findByNome(String nome);//Buscando o evento por nome

    List<Evento> findByLocal(String local);//Lista eventos por local

    List<Evento> findByDataInicialAfter(LocalDate dataInicial);

    Optional<Evento> findById(long id); //Busca evento por ID

    //Método para calcular a média das avaliações de um evento específico
    @Query("SELECT AVG(a.nota) FROM Avaliacao a WHERE a.evento.id = :eventoId")
    Double calcularMediaAvaliacoesPorEvento(@Param ("eventoId")Long eventoId);

    //Lista eventos por nota de avaliações em ordem decrescente
    @Query("SELECT e FROM Evento e JOIN e.avaliacoes a GROUP BY e.id ORDER BY AVG(a.nota) DESC")
    List<Evento> findAllByOrderByMediaAvaliacoesDesc();

}
