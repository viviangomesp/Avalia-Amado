package br.unijorge.avaliaamado.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.unijorge.avaliaamado.model.Evento;
import br.unijorge.avaliaamado.repository.EventoRepository;

@Service
public class EventoService {

    @Autowired
    private EventoRepository eventoRepository;

    public Evento criarEvento(Evento evento) { //TODO: SOMENTE ADMINISTRADOR PODE CRIAR EVENTO
        if (eventoRepository.findByNome(evento.getNome()) != null) { // Verifica se o evento já está cadastrado atraves do nome
            throw new RuntimeException("Evento já cadastrado");
        }
        return eventoRepository.save(evento);
    }

    public Evento editarEvento(long id, Evento evento) {
        Evento eventoExistente = eventoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Evento não encontrado"));
        
        eventoExistente.setNome(evento.getNome());
        eventoExistente.setDescricao(evento.getDescricao());
        eventoExistente.setLocal(evento.getLocal());
        eventoExistente.setDataInicial(evento.getDataInicial());
        eventoExistente.setDataFinal(evento.getDataFinal());
        eventoExistente.setHoraInicial(evento.getHoraInicial());
        eventoExistente.setHoraFinal(evento.getHoraFinal());
        
        return eventoRepository.save(eventoExistente);
    }

    public void deleteEvento(long id) {
        eventoRepository.deleteById(id);
    }

    public Evento getById(long id) {
        return eventoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Evento não encontrado"));
    }

    public List<Evento> getAllEventos() {
        return eventoRepository.findAll();
    }

    public List<Evento> listarPorNotaDesc() {
        return eventoRepository.findAllByOrderByNotaDesc();
    }

    public List<Evento> listarPorLocal(String local) {
        return eventoRepository.findByLocal(local);
    }

    public List<Evento> listarPorData(LocalDate data) {
        return eventoRepository.findByDataInicial(data);
    }

    public Double obterNotaMediaEvento(Long eventoId) {// Obtém a média de avaliações de um evento
        Double media = eventoRepository.calcularMediaAvaliacoesPorEvento(eventoId);
        return media != null ? media : 0.0; // Retorna 0.0 se a média for nula
    }
    
}
