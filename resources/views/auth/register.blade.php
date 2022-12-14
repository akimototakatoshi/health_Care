@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Register') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="row mb-3">
                            <label for="name" class="col-md-4 col-form-label text-md-end">{{ __('Name') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end">{{ __('Email Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="age" class="col-md-4 col-form-label text-md-end">{{ __('Age') }}</label>

                            <div class="col-md-6">
                                <select name="age" class="form-select">
                                    <option value="">選択してください</option> 
                                    <option value="1" {{ old('age') == 1 ? 'selected' : '' }}  class="form-control @error('age') is-invalid @enderror">~19歳</option> 
                                    <option value="2" {{ old('age') == 2 ? 'selected' : '' }}  class="form-control @error('age') is-invalid @enderror">20歳~29歳</option> 
                                    <option value="3" {{ old('age') == 3 ? 'selected' : '' }}  class="form-control @error('age') is-invalid @enderror">30歳~39歳</option> 
                                    <option value="4" {{ old('age') == 4 ? 'selected' : '' }}  class="form-control @error('age') is-invalid @enderror">40歳~49歳</option> 
                                    <option value="5" {{ old('age') == 5 ? 'selected' : '' }}  class="form-control @error('age') is-invalid @enderror">50歳~59歳</option> 
                                    <option value="6" {{ old('age') == 6 ? 'selected' : '' }}  class="form-control @error('age') is-invalid @enderror">60歳~</option> 
                                </select>

                                @error('age')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label class="col-md-4 col-form-label text-md-end">{{ __('Gender') }}</label>

                            <div class="col-md-6">
                                <input type="radio" id="male" name="gender" value="0" {{ old('gender') == 0 ? 'checked' : '' }}  class="form-check-input @error('gender') is-invalid @enderror">
                                <label class="form-check-label" for="male">
                                    男性
                                </label>
                                
                                <input type="radio" id="female" name="gender" value="1" {{ old('gender') == 1 ? 'checked' : '' }}  class="form-check-input @error('gender') is-invalid @enderror">
                                <label class="form-check-label" for="female">
                                    女性
                                </label>

                                @error('gender')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="height" class="col-md-4 col-form-label text-md-end">{{ __('Height') }}</label>

                            <div class="col-md-6">
                                <input id="height" type="text" class="form-control @error('height') is-invalid @enderror" name="height" value="{{ old('height') }}" required>

                                @error('height')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="weight" class="col-md-4 col-form-label text-md-end">{{ __('Weight') }}</label>

                            <div class="col-md-6">
                                <input id="weight" type="weight" class="form-control @error('weight') is-invalid @enderror" name="weight" value="{{ old('weight') }}" required>

                                @error('weight')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="physical" class="col-md-4 col-form-label text-md-end">{{ __('Physical') }}</label>
                            <div class="col-md-6">
                                <select name="physical" class="form-select">
                                    <option value="">選択してください</option> 
                                    <option value="1.5" {{ old('physical') == 1.5 ? 'selected' : '' }}  class="form-control @error('physical') is-invalid @enderror">生活の大部分が座位で、静的な活動が中心</option> 
                                    <option value="1.75" {{ old('physical') == 1.75 ? 'selected' : '' }}  class="form-control @error('physical') is-invalid @enderror">座位中心の仕事だが、作業・接客等、あるいは通勤・買物・家事など軽い運動を含む</option> 
                                    <option value="2.0" {{ old('physical') == 2.0 ? 'selected' : '' }}  class="form-control @error('physical') is-invalid @enderror">移動や立位の多い仕事への従事者。あるいは、スポーツなど余暇における活発な運動習慣をもっている</option> 
                                </select>

                                @error('physical')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-end">{{ __('Confirm Password') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
