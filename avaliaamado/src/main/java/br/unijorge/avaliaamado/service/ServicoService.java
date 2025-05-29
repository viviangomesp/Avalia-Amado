package br.unijorge.avaliaamado.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.unijorge.avaliaamado.enums.TipoServico;
import br.unijorge.avaliaamado.model.Servico;
import br.unijorge.avaliaamado.model.Usuario;
import br.unijorge.avaliaamado.repository.ServicoRepository;
import br.unijorge.avaliaamado.repository.UsuarioRepository;

@Service
public class ServicoService {

    @Autowired
    private ServicoRepository servicoRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Servico criarServico(Servico servico, Long usuarioId){//TODO: SOMENTE ADMINISTRADOR PODE CRIAR SERVIÇO
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
        
        String role = usuario.getRole();        
        
        if (role == null)
            throw new RuntimeException("Usuário não possui função atribuída. Acesso Negado.");
        
        if (!role.equalsIgnoreCase("ADMIN")) { // Verifica se o usuário é administrador
            throw new RuntimeException("Apenas administradores podem criar eventos");
        }
        return servicoRepository.save(servico);
    }

    public Servico editarServico(long id, Servico servico) {
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
    
    public void deleteServico(long id) {
        servicoRepository.deleteById(id);
    }

    public Servico buscarServicoPorId(long id) {
        return servicoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Serviço não encontrado"));
    }

    public List<Servico> getAllServicos() {
        return servicoRepository.findAll();
    }

    public Servico getById(long id) {
        return servicoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Serviço não encontrado"));
    }

    public List<Servico> listarPorNotaDesc() {
        return servicoRepository.findAllByOrderByMediaAvaliacoesDesc();
    }

    public List<Servico> buscarServicoPorTipo(TipoServico tipo) {
        return servicoRepository.findByTipo(tipo);
    }

    public List<Servico> listarPorLocal(String local) {
        return servicoRepository.findByLocal(local);
    }

    public Double obterNotaMediaServico (Long servicoId){
        Double media = servicoRepository.calcularMediaAvaliacoesPorServico(servicoId);
        return media != null ? media : 0.0; // Retorna 0.0 se a média for nula
    }
    
}