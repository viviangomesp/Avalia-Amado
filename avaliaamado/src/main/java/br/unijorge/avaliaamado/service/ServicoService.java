package br.unijorge.avaliaamado.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.unijorge.avaliaamado.model.Servico;
import br.unijorge.avaliaamado.repository.ServicoRepository;

@Service
public class ServicoService {

    @Autowired
    private ServicoRepository servicoRepository;

    public Servico criarServico(Servico servico){//SOMENTE ADMINISTRADOR PODE CRIAR SERVIÇO
        return servicoRepository.save(servico);
    }

    public Servico editarServico(long id, Servico servico) { // Método para editar o serviço
        Servico servicoExistente = servicoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Serviço não encontrado"));
        
        servicoExistente.setTipo(servico.getTipo());
        servicoExistente.setTipoSaude(servico.getTipoSaude());
        servicoExistente.setDescricao(servico.getDescricao());
        servicoExistente.setLocal(servico.getLocal());
        servicoExistente.setDataInicial(servico.getDataInicial());
        servicoExistente.setDataFinal(servico.getDataFinal());
        servicoExistente.setHoraInicial(servico.getHoraInicial());
        servicoExistente.setHoraFinal(servico.getHoraFinal());
        
        return servicoRepository.save(servicoExistente);

    }
    
    public void deleteServico(long id) { // Método para deletar o serviço
        servicoRepository.deleteById(id);
    }

    public Servico buscarServicoPorId(long id) { // Método para buscar o serviço por ID
        return servicoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Serviço não encontrado"));
    }

    public Servico getById(long id) {
        return servicoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Serviço não encontrado"));
    }

    //tipo servico saude

}