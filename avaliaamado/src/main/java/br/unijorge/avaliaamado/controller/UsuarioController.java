package br.unijorge.avaliaamado.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.unijorge.avaliaamado.DTO.LoginRequest;
import br.unijorge.avaliaamado.model.Usuario;
import br.unijorge.avaliaamado.service.UsuarioService;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/all")
    public ResponseEntity<?> getAllUsuarios(@RequestParam Long usuarioId) {
        try {
            List<Usuario> usuarios = usuarioService.getAllUsuarios(usuarioId);
            return ResponseEntity.ok(usuarios);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("erro", e.getMessage()));
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> buscarUsuarioPorId(@PathVariable Long id) {
        Usuario usuario = usuarioService.getById(id);
        return ResponseEntity.ok(usuario);
    }

    @PostMapping("/novoUsuario")
    public ResponseEntity<Usuario> criarUsuario(@RequestBody Usuario usuario) {
        try {
            usuarioService.criarUsuario(usuario);
            return ResponseEntity.ok(usuario);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<Usuario> loginUsuario(@RequestBody LoginRequest loginRequest) {
        try {
            Usuario usuario = usuarioService.login(loginRequest.getEmail(), loginRequest.getSenha());
            return ResponseEntity.ok(usuario);
        } catch (Exception e) {
            return ResponseEntity.status(401).body(null);
        }
    }

    @PutMapping("/editarUsuario/{id}")
    public ResponseEntity<Usuario> editarUsuario(@PathVariable long id, @RequestBody Usuario usuario) {
        Usuario usuarioAtualizado = usuarioService.editarUsuario(id, usuario);
        return ResponseEntity.ok(usuarioAtualizado);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteUsuario(@PathVariable Long id) {
        try {
            usuarioService.deleteUsuario(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
