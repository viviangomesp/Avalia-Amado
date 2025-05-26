package br.unijorge.avaliaamado.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.unijorge.avaliaamado.model.Evento;
import br.unijorge.avaliaamado.repository.EventoRepository;

@Service
public class EventoService {

    @Autowired
    private EventoRepository eventoRepository;

    public Evento criarEvento(Evento evento) { //SOMENTE ADMINISTRADOR PODE CRIAR EVENTO
        if (eventoRepository.findByNome(evento.getNome()) != null) { // Verifica se o evento já está cadastrado no banco de dados
            throw new RuntimeException("Evento já cadastrado");
        }
        return eventoRepository.save(evento);
    }

    public Evento editarEvento(long id, Evento evento) { // Método para editar o evento
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

    public void deleteEvento(long id) { // Método para deletar o evento
        eventoRepository.deleteById(id);
    }

    public Evento getById(long id) { // Método para buscar o evento por ID
        return eventoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Evento não encontrado"));
    }

    public List<Evento> listarPorNotaDesc() { // Método para listar os eventos por nota decrescente
        return eventoRepository.findAllByOrderByNotaDesc();
    }

}
